import { SocialLoginModule,AuthServiceConfig,GoogleLoginProvider } from "angular5-social-login";

export function getAuthServiceConfigs() {
    let config = new AuthServiceConfig([{
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider("874985456336-oson2vo9j8i4av0jgldio39fve2omp1s.apps.googleusercontent.com")
    }]);
    
    return config;
}
