const { Kafka } = require("kafkajs");

const kafka = new Kafka({
  clientId: "my-app",
  brokers: ["my-cluster-kafka-bootstrap:9092"],
});

const producer = kafka.producer();

await producer.connect();

await producer.send({
  topic: "test-topic",
  messages: [{ value: "Diaf from Kafka Producer" }],
});

await producer.disconnect();
