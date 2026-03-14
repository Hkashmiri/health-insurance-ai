"use client";

import { db } from "@/lib/db";
import { type AppSchema } from "@/instant.schema";
import { id, InstaQLEntity } from "@instantdb/react";

type Appointment = InstaQLEntity<AppSchema, "appointments">;

const sampleAppointment = {
  title: "Annual Checkup - Dr. Johnson",
  doctorName: "Dr. Sarah Johnson",
  specialty: "Internal Medicine",
  status: "Completed",
  date: new Date("2026-03-09T10:30:00Z").getTime(),
  summary:
    "Dr. Johnson reviewed your annual labs. Blood pressure is well-controlled on Lisinopril 10mg. Noted afternoon fatigue - likely medication-related. Added Vitamin D 2000 IU daily for low vitamin D levels. Follow-up in 6 months unless symptoms worsen.",
  translationEs:
    "Se revisaron sus análisis anuales. La presión arterial está bien controlada con Lisinopril 10 mg. Se observó fatiga por la tarde, probablemente relacionada con la medicación. Se añadió Vitamina D 2000 UI diaria por niveles bajos. Seguimiento en 6 meses o antes si los síntomas empeoran.",
  transcript:
    "Doctor: Good morning! How have you been feeling since our last visit? Patient: Pretty good overall, though I have noticed some fatigue in the afternoons. Doctor: That could be related to your blood pressure medication. I want to continue the Lisinopril at 10mg once daily. Also, let us add a Vitamin D supplement since your levels were low last time. I am prescribing 2000 IU once daily. Make sure you are eating well and staying hydrated.",
};

const medicationTemplates = [
  {
    name: "Lisinopril",
    dosage: "10mg",
    frequency: "Once daily",
    instructions: "Continue once daily",
  },
  {
    name: "Vitamin D",
    dosage: "2000 IU",
    frequency: "Once daily",
    instructions: "New prescription",
  },
];

function formatDate(value: number) {
  return new Date(value).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function AppointmentDetailPanel() {
  const { isLoading, error, data } = db.useQuery({ appointments: {} });

  if (isLoading) {
    return (
      <div className="bg-white rounded-2xl shadow-md p-6">
        <div className="h-6 w-48 bg-gray-200 rounded mb-4" />
        <div className="h-3 w-72 bg-gray-200 rounded mb-2" />
        <div className="h-3 w-64 bg-gray-200 rounded" />
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500 text-sm">Error: {error.message}</div>;
  }

  const appointment: Appointment | undefined = data?.appointments?.[0];

  const addSampleAppointment = () => {
    db.transact(
      db.tx.appointments[id()].update({
        ...sampleAppointment,
        createdAt: Date.now(),
      }),
    );
  };

  const addMedications = () => {
    const txs = medicationTemplates.map((med) =>
      db.tx.medications[id()].update({
        ...med,
        status: "Active",
        createdAt: Date.now(),
      }),
    );
    db.transact(txs);
  };

  if (!appointment) {
    return (
      <div className="bg-white rounded-2xl shadow-md p-6 text-sm text-gray-700">
        <p className="mb-4">No appointments yet. Add the sample appointment to see the full view.</p>
        <button
          onClick={addSampleAppointment}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Add sample appointment
        </button>
      </div>
    );
  }

  return (
    <div className="grid lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 bg-white rounded-2xl shadow-md p-6 space-y-6">
        <div>
          <h3 className="text-2xl font-semibold">{appointment.title}</h3>
          <p className="text-sm text-gray-600">
            {appointment.doctorName} • {appointment.specialty}
          </p>
          <p className="text-sm text-gray-600">{formatDate(appointment.date)}</p>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-2">Executive Summary</h4>
          <p className="text-sm text-gray-700 leading-relaxed">{appointment.summary}</p>
        </div>

        {appointment.translationEs && (
          <div>
            <h4 className="text-lg font-semibold mb-2">Translation (Spanish)</h4>
            <div className="rounded-xl border border-blue-100 bg-blue-50 p-4 text-sm text-gray-700">
              {appointment.translationEs}
            </div>
          </div>
        )}

        <div>
          <h4 className="text-lg font-semibold mb-2">Action Items & Medications</h4>
          <div className="grid md:grid-cols-2 gap-4">
            {medicationTemplates.map((med) => (
              <div key={med.name} className="rounded-xl border border-gray-200 p-4">
                <div className="font-semibold">
                  {med.name} {med.dosage}
                </div>
                <div className="text-sm text-gray-600">{med.instructions}</div>
              </div>
            ))}
          </div>
          <button
            onClick={addMedications}
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Add to Medication Manager
          </button>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-2">Full Raw Transcript</h4>
          <div className="rounded-xl border border-gray-200 bg-gray-50 p-4 text-sm text-gray-700 leading-relaxed">
            {appointment.transcript}
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h4 className="text-lg font-semibold mb-2">Next steps</h4>
          <ul className="text-sm text-gray-700 space-y-2">
            <li>Schedule follow-up in 6 months.</li>
            <li>Pick up Vitamin D prescription.</li>
            <li>Monitor afternoon fatigue.</li>
          </ul>
        </div>
        <div className="bg-blue-600 text-white rounded-2xl shadow-md p-6">
          Enable reminders for this appointment and medication plan.
        </div>
      </div>
    </div>
  );
}
