function ResultCard({
  name,
  date,
  time,
  activity,
  message,
}) {
  return (
    <div className="mt-8 bg-gradient-to-br from-pink-50 to-rose-100 rounded-3xl shadow-xl p-8 border-2 border-pink-200">

      <h2 className="text-3xl font-bold text-center text-pink-600">
         Yay {name}! 
      </h2>

      <p className="text-center mt-2 text-gray-600">
        Day successfully planned. Ready for adventure??? （￣︶￣）↗　
      </p>

      <div className="mt-6 space-y-4 text-lg">

        <p>
          📅 <b>Date:</b> {date}
        </p>

        <p>
          ⏰ <b>Time:</b> {time}
        </p>

        <p>
          🫡 <b>Activity:</b> {activity}
        </p>

        <p>
          ✒️ <b>Message:</b>
        </p>

        <div className="bg-white rounded-xl p-4 italic">
          {message}
        </div>

      </div>

      <h3 className="text-center text-2xl mt-8">
        Blehhhhhhhhhhhhhh fainteddd 🫡
      </h3>

    </div>
  );
}

export default ResultCard;