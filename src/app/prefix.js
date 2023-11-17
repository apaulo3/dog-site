
const env = process.env.NODE_ENV;
const prefix = (env == "development") ? "" : "/dog-site";

export default prefix;