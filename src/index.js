import Collection, {setLogger} from "lk-collection";
import dotenv from "dotenv";
import bunyan from "bunyan";

import schema from "./schema";

dotenv.load();
const logger = bunyan.createLogger({name: "SitesApi"});
setLogger(logger);

const Sites = new Collection({
    name: "sites",
    mongodbUrl: process.env.MONGODB_URL,
    schema: schema,
    kinesisStreamName: process.env.KINESIS_STREAM_NAME
});

export const handler = Sites.apiGatewayToKinesis;
