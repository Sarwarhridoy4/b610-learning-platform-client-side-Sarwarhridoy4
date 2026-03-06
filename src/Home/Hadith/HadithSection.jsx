import { useEffect, useState } from "react";

const HADITH_API = "https://hadith-server.vercel.app/api/random-hadith";

const HadithSection = () => {
  const [hadithData, setHadithData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadHadith = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch(HADITH_API);

      if (!response.ok) {
        throw new Error("Unable to load hadith right now.");
      }

      const data = await response.json();
      setHadithData(data);
    } catch (err) {
      setError(err.message || "Something went wrong while loading hadith.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadHadith();
  }, []);

  return (
    <section className='page-shell'>
      <div className='soft-card p-6 md:p-8'>
        <div className='flex flex-wrap items-center justify-between gap-3'>
          <div>
            <p className='text-xs uppercase tracking-[0.26em] text-slate-700 font-bold'>Daily Reflection</p>
            <h2 className='mt-2 text-2xl md:text-3xl font-black text-slate-900'>Random Hadith</h2>
          </div>
          <button onClick={loadHadith} className='brand-button alt' disabled={loading}>
            {loading ? "Loading..." : "New Hadith"}
          </button>
        </div>

        {loading && (
          <p className='mt-6 text-slate-600'>Fetching hadith...</p>
        )}

        {!loading && error && (
          <p className='mt-6 text-red-600'>{error}</p>
        )}

        {!loading && !error && hadithData && (
          <article className='mt-6 neo-subcard p-5'>
            <p className='text-lg leading-8 text-slate-800'>"{hadithData.hadith}"</p>
            <p className='mt-4 font-bold text-slate-900'>{hadithData.narrator}</p>
            <p className='mt-1 text-sm text-slate-600'>
              {hadithData.source} {hadithData.reference ? `- ${hadithData.reference}` : ""}
            </p>
          </article>
        )}
      </div>
    </section>
  );
};

export default HadithSection;
