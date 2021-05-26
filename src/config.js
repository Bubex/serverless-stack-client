const dev = {
  STRIPE_KEY: "pk_test_51Iv9cfDZcGhTGqWXzJ8cWLYbRHKEKtGWdV9lnkd5lTgNkp6rOEFbWREBjO48Eiaka0YLaRh9FMyIHuuwk9Br2Nv2009OTvEXnk",
  s3: {
    REGION: "us-east-1",
    BUCKET: "dev-notes-infra-s3-uploads4f6eb0fd-trut93qxmuu6"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://2440oqd981.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_bIkRInEva",
    APP_CLIENT_ID: "5il7434em12pcib3vvigtb5h96",
    IDENTITY_POOL_ID: "us-east-1:7ed28d64-6b7e-494d-9cce-ea733b4de22a"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_51Iv9cfDZcGhTGqWXzJ8cWLYbRHKEKtGWdV9lnkd5lTgNkp6rOEFbWREBjO48Eiaka0YLaRh9FMyIHuuwk9Br2Nv2009OTvEXnk",
  s3: {
    REGION: "us-east-1",
    BUCKET: "prod-notes-infra-s3-uploads4f6eb0fd-1euskruzmji25"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://0f94aey7b8.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_FcKwrjky4",
    APP_CLIENT_ID: "35otjbfsc07jrtuhe4j6ohjd7l",
    IDENTITY_POOL_ID: "us-east-1:04f3c22d-6a76-46fa-bed3-750caa0a92c2"
  }
};

const config = {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  // Default to dev if not set
  ...(process.env.REACT_APP_STAGE === "prod" ? prod : dev),
};

export default config;