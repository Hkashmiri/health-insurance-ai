import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function RecordingPage() {
  return (
    <>
      <Navigation />

      <div className="bg-gradient-to-b from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Record appointments, capture every detail, and leave with clarity
              </h1>
              <p className="text-lg md:text-xl opacity-90 mb-6">
                HealthGuard records visits, transcribes in real time, and generates an AI summary
                for diagnoses, medications, and next steps.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                  Request access
                </Link>
                <Link href="/appointments" className="border border-white/60 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition">
                  Pair with scheduling
                </Link>
              </div>
            </div>
            <div className="bg-white/10 rounded-2xl p-6 border border-white/20 shadow-xl">
              <div className="text-sm uppercase tracking-widest text-blue-100 mb-3">Live Transcript</div>
              <div className="space-y-3 text-sm">
                <div className="bg-white text-blue-900 rounded-lg px-4 py-3">
                  Doctor: We'll adjust your dosage and schedule a follow-up in 6 weeks.
                </div>
                <div className="bg-white text-blue-900 rounded-lg px-4 py-3">
                  Patient: I’ve had dizziness in the afternoon.
                </div>
                <div className="bg-blue-900/40 rounded-lg px-4 py-3">
                  Translating to Spanish • 94% complete
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 bg-gray-50 text-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-10">Recording workflow</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-3">1. Start recording</h3>
              <p className="text-sm text-gray-600">
                Grant microphone permissions and begin capturing appointment audio.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-3">2. Transcribe locally</h3>
              <p className="text-sm text-gray-600">
                Speech-to-text runs on device with Whisper WebAssembly for privacy.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-3">3. Summarize</h3>
              <p className="text-sm text-gray-600">
                Get structured notes for diagnosis, medications, and follow-up steps.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 bg-white text-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Everything saved locally, ready offline</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3">
                <span className="text-blue-600 font-semibold">•</span>
                Appointment history with timestamped transcripts.
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-semibold">•</span>
                Translation toggle for multilingual households.
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-semibold">•</span>
                Encrypted storage to keep notes private.
              </li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 shadow-lg">
            <div className="text-sm uppercase tracking-widest text-blue-600 mb-4">AI Summary</div>
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <div className="font-semibold">Diagnosis</div>
                <div className="text-sm text-gray-600">Mild hypertension, improving.</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <div className="font-semibold">Medications</div>
                <div className="text-sm text-gray-600">Continue 20mg daily, adjust timing.</div>
              </div>
              <div className="bg-blue-600 text-white rounded-xl p-4">
                Follow-up in 6 weeks with updated lab work.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-4">Keep every appointment organized</h2>
          <p className="text-lg mb-8">Record once, revisit anytime, and share summaries securely.</p>
          <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            Talk to the team
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
}
