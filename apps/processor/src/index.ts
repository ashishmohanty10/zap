import prisma from "@repo/db";
import { Kafka } from "kafkajs";

const TOPIC_NAME = "zap-events";

const kafka = new Kafka({
  clientId: "processor-outbox",
  brokers: ["localhost:9092"],
});

async function main() {
  const producer = kafka.producer();
  await producer.connect();
  while (1) {
    const pendingRows = await prisma.zapRunOutbox.findMany({
      where: {},
      take: 10,
    });

    producer.send({
      topic: TOPIC_NAME,
      messages: pendingRows.map((r) => ({
        value: r.zapRunId,
      })),
    });

    await prisma.zapRunOutbox.deleteMany({
      where: {
        id: {
          in: pendingRows.map((x) => x.id),
        },
      },
    });
  }
}

main();
