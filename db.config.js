import { DynamoDBClient } from '@aws-sdk/client-dynamodb'

const db = new DynamoDBClient({ region: "us-east-2" })
const Table = 'Productos'

export {
    db,
    Table
}