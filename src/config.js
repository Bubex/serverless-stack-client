const config = {
    STRIPE_KEY: "pk_test_51Iv9cfDZcGhTGqWXzJ8cWLYbRHKEKtGWdV9lnkd5lTgNkp6rOEFbWREBjO48Eiaka0YLaRh9FMyIHuuwk9Br2Nv2009OTvEXnk",
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
      REGION: "us-east-1",
      BUCKET: "marlonf-notes-app-upload",
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://0f94aey7b8.execute-api.us-east-1.amazonaws.com/prod",
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_KAhxgfPdd",
      APP_CLIENT_ID: "7holoieql8dj4tneitb4ous85",
      IDENTITY_POOL_ID: "us-east-1:f7e40c97-84d8-4a8e-8d15-c8af441208db",
    },
};
  
export default config;