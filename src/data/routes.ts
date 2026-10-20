export const paths={home:{id:'/',en:'/en/'},privacy:{id:'/kebijakan-privasi/',en:'/en/privacy-policy/'},terms:{id:'/ketentuan-layanan/',en:'/en/terms-of-service/'},cookies:{id:'/pengaturan-cookie/',en:'/en/cookie-settings/'}} as const;
export type Locale='id'|'en';
export type PageKey=keyof typeof paths;
