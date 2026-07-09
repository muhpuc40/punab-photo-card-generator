function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(new Error('Unable to read the selected image.'));
    reader.readAsDataURL(file);
  });
}

export default function ControlPanel({ values, onChange }) {
  const handleImageUpload = async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      event.target.value = '';
      alert('Please upload a valid image file.');
      return;
    }
    try { onChange('guestImage', await readFileAsDataUrl(file)); }
    catch (error) { console.error(error); event.target.value = ''; alert('Image upload failed. Please try another image.'); }
  };

  return (
    <section className="rounded-2xl bg-white p-4 shadow-sm sm:p-5">
      <h2 className="mb-1 text-lg font-bold sm:text-xl">Guest Information</h2>
      <p className="mb-4 text-sm text-slate-500 sm:mb-5">Only these fields are editable. The poster layout is fixed.</p>
      <div className="space-y-4 sm:space-y-5">
        <label className="block">
          <span className="mb-2 block text-sm font-semibold text-slate-700">Guest Image</span>
          <input type="file" accept="image/*" onChange={handleImageUpload} className="block w-full cursor-pointer rounded-xl border border-slate-300 bg-white text-sm text-slate-700 file:mr-3 file:border-0 file:bg-slate-900 file:px-3 file:py-3 file:text-sm file:font-semibold file:text-white hover:file:bg-slate-700 sm:file:mr-4 sm:file:px-4" />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-semibold text-slate-700">Guest Type</span>
          <input type="text" value={values.guestType} onChange={(event) => onChange('guestType', event.target.value)} className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-base outline-none ring-slate-900/10 focus:ring-4" placeholder="যেমন: সম্মানিত অতিথি" />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-semibold text-slate-700">Guest Name</span>
          <input type="text" value={values.guestName} onChange={(event) => onChange('guestName', event.target.value)} className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-base outline-none ring-slate-900/10 focus:ring-4" placeholder="অতিথির নাম লিখুন" />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-semibold text-slate-700">Guest Designation</span>
          <textarea value={values.guestDesignation} onChange={(event) => onChange('guestDesignation', event.target.value)} rows={5} className="w-full resize-y rounded-xl border border-slate-300 bg-white px-4 py-3 text-base leading-7 outline-none ring-slate-900/10 focus:ring-4 lg:min-h-[132px]" placeholder="অতিথির পদবি / পরিচয় লিখুন" />
        </label>
      </div>
    </section>
  );
}
