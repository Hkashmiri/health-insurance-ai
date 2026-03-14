// Docs: https://www.instantdb.com/docs/modeling-data

import { i } from "@instantdb/react";

const _schema = i.schema({
  entities: {
    $files: i.entity({
      path: i.string().unique().indexed(),
      url: i.string(),
    }),
    $users: i.entity({
      email: i.string().unique().indexed().optional(),
      imageURL: i.string().optional(),
      type: i.string().optional(),
    }),
    appointments: i.entity({
      title: i.string(),
      doctorName: i.string(),
      specialty: i.string(),
      status: i.string(),
      date: i.number(),
      summary: i.string(),
      translationEs: i.string().optional(),
      transcript: i.string(),
      createdAt: i.number(),
    }),
    medications: i.entity({
      name: i.string(),
      dosage: i.string(),
      frequency: i.string(),
      instructions: i.string().optional(),
      status: i.string().optional(),
      createdAt: i.number(),
    }),
    transcripts: i.entity({
      appointmentId: i.string().optional(),
      text: i.string(),
      language: i.string().optional(),
      createdAt: i.number(),
    }),
    reminders: i.entity({
      type: i.string(),
      message: i.string(),
      dueAt: i.number(),
      status: i.string().optional(),
      createdAt: i.number(),
    }),
    contactMessages: i.entity({
      name: i.string(),
      email: i.string(),
      company: i.string().optional(),
      message: i.string(),
      createdAt: i.number(),
    }),
  },
  links: {
    $usersLinkedPrimaryUser: {
      forward: {
        on: "$users",
        has: "one",
        label: "linkedPrimaryUser",
        onDelete: "cascade",
      },
      reverse: {
        on: "$users",
        has: "many",
        label: "linkedGuestUsers",
      },
    },
  },
});

// This helps TypeScript display nicer intellisense
type _AppSchema = typeof _schema;
interface AppSchema extends _AppSchema {}
const schema: AppSchema = _schema;

export type { AppSchema };
export default schema;
