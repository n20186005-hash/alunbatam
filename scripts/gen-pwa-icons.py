"""Membuat ikon PWA (192 / 512 / 512-maskable) dari markah logo Alun-Alun Batam Centre."""

from pathlib import Path

from PIL import Image, ImageDraw

OUT = Path(__file__).resolve().parent.parent / "public" / "icons"

TEAL = (10, 65, 71, 255)        # #0a4147
TEAL_MID = (15, 95, 98, 255)    # #0f5f62
GOLD = (212, 168, 79, 255)      # #d4a84f
CREAM = (247, 243, 232, 255)    # #f7f3e8

STAR = [(32, 3), (42, 22), (61, 32), (42, 42), (32, 61), (22, 42), (3, 32), (22, 22)]


def draw_mark(size: int, scale: float, background: bool) -> Image.Image:
    img = Image.new("RGBA", (size, size), TEAL if background else (0, 0, 0, 0))
    d = ImageDraw.Draw(img)

    # markah diskalakan lalu dipusatkan
    span = size * scale
    off = (size - span) / 2
    s = span / 64.0

    def p(x: float, y: float):
        return (off + x * s, off + y * s)

    d.polygon([p(x, y) for x, y in STAR], fill=GOLD)

    r = 16 * s
    cx, cy = p(32, 32)
    d.ellipse([cx - r, cy - r, cx + r, cy + r], fill=TEAL_MID)

    x0, y0 = p(16, 29)
    x1, y1 = p(48, 43)
    d.arc([x0, y0, x1, y1], 180, 360, fill=GOLD, width=max(2, round(4 * s)))

    d.polygon([p(24, 31), p(40, 31), p(32, 20)], fill=CREAM)
    return img


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    draw_mark(192, 0.86, True).save(OUT / "icon-192.png")
    draw_mark(512, 0.86, True).save(OUT / "icon-512.png")
    # maskable: latar penuh, isi dijaga di dalam zona aman 60%
    draw_mark(512, 0.60, True).save(OUT / "icon-512-maskable.png")
    for name in ("icon-192.png", "icon-512.png", "icon-512-maskable.png"):
        print(name, (OUT / name).stat().st_size)


if __name__ == "__main__":
    main()
