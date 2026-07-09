import { useState } from "react";
import ResultCard from "./ResultCard";


function DateForm() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [activity, setActivity] = useState("");
  const [otherActivity, setOtherActivity] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const activities = [
    "☕ Coffee & Paint",
    "🍦 Ice Cream & Skate",
    "🎡 Fun Park",
    "🦁 Zoo",
    "🧺 Picnic",
    "🍿 Movie",
    "🛍️ Shopping",
    "🌸 Garden",
    "🎮 Arcade",
    "🍜 Food Hunt",
    "🎤 Karaoke",
    "✨ Other",
  ];

  function handleSubmit() {
    if (!date || !time || !activity) {
      alert("Fill itttt !!!!!");
      return;
    }

    if (activity === "✨ Other" && otherActivity.trim() === "") {
      alert("Tell me what you'd like to do! ");
      return;
    }

    setSubmitted(true);
  }

  return (
    <div className="mt-8">
        <div className="mb-5">

<label className="font-semibold text-pink-600">
👤 Your Name
</label>

<input
type="text"
placeholder="Enter your name..."
value={name}
onChange={(e)=>setName(e.target.value)}
className="w-full mt-2 border rounded-xl p-3 focus:ring-2 focus:ring-pink-300 outline-none"
/>

</div>

      {}

      <div className="mb-5">

        <label className="font-semibold text-pink-600">
          📅 Choose a Date
        </label>

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full mt-2 border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-pink-300"
        />

      </div>

      {}

      <div className="mb-5">

        <label className="font-semibold text-pink-600">
          ⏰ Choose a Time
        </label>

        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="w-full mt-2 border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-pink-300"
        />

      </div>

<div className="mt-6">

<label className="font-semibold text-pink-600">
Any messages???
</label>

<textarea
rows="4"
placeholder="Wellllll ready for adventure!!"
value={message}
onChange={(e)=>setMessage(e.target.value)}
className="w-full mt-2 border rounded-xl p-3 focus:ring-2 focus:ring-pink-300 outline-none"
/>

</div>
      {}

      <h2 className="text-xl font-bold text-center text-pink-600 mb-4">
        🙌 Pick an Activity
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

        {activities.map((item) => (

          <button
            key={item}
            onClick={() => setActivity(item)}
            className={`rounded-2xl p-4 shadow transition duration-300 hover:scale-105 ${
              activity === item
                ? "bg-pink-500 text-white"
                : "bg-pink-50 hover:bg-pink-200"
            }`}
          >
            {item}
          </button>

        ))}

      </div>

      {/* Other */}

      {activity === "✨ Other" && (

        <div className="mt-6">

          <label className="font-semibold text-pink-600">
            What's your idea???🧐
          </label>

          <textarea
            rows="4"
            value={otherActivity}
            onChange={(e) => setOtherActivity(e.target.value)}
            placeholder="Maybe stargazing, hiking, bowling..."
            className="w-full mt-2 border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-pink-300"
          />

        </div>

      )}

      {}

      <button
        onClick={handleSubmit}
        className="w-full mt-8 bg-pink-500 text-white py-4 rounded-2xl text-lg font-bold hover:bg-pink-600 hover:scale-105 transition duration-300"
      >
         Plan Our Day🤪
      </button>
<button
onClick={()=>{
setName("");
setDate("");
setTime("");
setActivity("");
setOtherActivity("");
setMessage("");
setSubmitted(false);
}}
className="w-full mt-4 bg-gray-300 hover:bg-gray-400 rounded-2xl py-4 font-bold transition"
>

🔄 Plan Another Day

</button>
      {}

      {submitted && (

        <ResultCard
name={name}
date={date}
time={time}
activity={
activity==="✨ Other"
? otherActivity
: activity
}
message={message}
/>

      )}

    </div>
  );
}

export default DateForm;