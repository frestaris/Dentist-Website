import dentstistImage from "../assets/dentists-hero-picture.jpg";

const Office = () => {
  return (
    <div className="mx-auto max-w-6xl">
      {/* TOP SECTION */}
      <div className="flex flex-col md:flex-row gap-12 max-w-6xl mb-4 mt-8 mx-4">
        <div className="flex-1">
          <h2 className="text-3xl font-semibold text-gray-600 mb-6">
            Bright, Modern, and Light-Filled
          </h2>
          <p className="text-gray-500 mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam optio
            expedita aliquid id dolore reiciendis fuga sequi, laboriosam dolores
            nostrum, asperiores alias aspernatur delectus vitae impedit
            doloribus. veritatis tempora corporis atque nostrum quibusdam autem,
            laboriosam eveniet? Minus eum ipsam placeat labore quam dolores.
          </p>
          <p className="text-gray-500 mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
            eveniet est fugit. Autem, a! Consequuntur soluta quaerat nam sint
            ipsa labore commodi magni minima esse, numquam dolorem quam
            recusandae quod.
          </p>
        </div>
        <div className="flex-1">
          <h3 className="text-md text-gray-500 font-semibold mb-6 uppercase">
            For a Comfortable Visit, We Offer:
          </h3>
          <ul className="list-disc list-inside space-y-2 ml-5 text-gray-500">
            <li>
              <span className="font-semibold text-gray-500">
                Text Message Reminders & Help
              </span>
              —no need to pick up the phone
            </li>
            <li>
              <span className="font-semibold text-gray-500">
                Complimentary Headphones
              </span>
              —over-ear, noise-canceling
            </li>
            <li>
              <span className="font-semibold text-gray-500">
                Odyssey Dental Laser
              </span>
              —for comfortable gum treatments
            </li>
            <li>
              <span className="font-semibold text-gray-500">
                Digital Radiographs
              </span>
              —with 80% less radiation
            </li>
            <li>
              <span className="font-semibold text-gray-500">
                Efficient, Precision Handpieces
              </span>
              —top-of-the-line equipment
            </li>
            <li>
              <span className="font-semibold text-gray-500">
                Friendly Humor
              </span>
              —our doctors make your visit as enjoyable as possible
            </li>
          </ul>
        </div>
      </div>
      <hr />
      {/* GRID PICTURES */}
      <div className="grid md:grid-cols-6 grid-cols-1 gap-4 max-w-6xl mx-4 md:px-4 py-12">
        {/* PICTURE 1 */}
        <div className="md:col-span-3 col-span-1 md:h-[23rem] bg-gray-300 rounded-[2.5rem]">
          <img
            src="https://www.rawcommercial.com.au/wp-content/uploads/2023/01/medical-fitout-brisbane-raw-commercial-projects-queensland-group-of-specialists-009.jpg"
            alt="picture1"
            className="w-full h-full object-cover rounded-[2.5rem]"
          />
        </div>
        {/* PICTURE 2 */}
        <div className="md:col-span-3 col-span-1 md:h-[23rem] bg-gray-400 rounded-[2.5rem]">
          <img
            src="https://i.homeadore.com/wp-content/uploads/2024/06/dermatology-medical-center-in-ljubljana-by-studio-360-004-460x314.jpg"
            alt="picture2"
            className="w-full h-full object-cover rounded-[2.5rem]"
          />
        </div>

        {/* PICTURE 3 */}
        <div className="md:col-span-4 col-span-1 md:h-[23rem] bg-gray-500 rounded-[2.5rem]">
          <img
            src="https://www.the-dentist.co.uk/media/snznvdd4/university-invests-32-million-to-create-a-state-of-the-art-dental-clinic-the-dentist.jpg?width=1002&height=564&bgcolor=White&v=1da584637c9ad90"
            alt="picture3"
            className="w-full h-full object-cover rounded-[2.5rem]"
          />
        </div>
        <div className="md:col-span-2 col-span-1 grid grid-rows-2 gap-4">
          {/* PICTURE 4 */}
          <div className=" md:h-[11rem] bg-gray-600 rounded-[2.5rem]">
            <img
              src="https://media.istockphoto.com/id/183405222/photo/office-building.jpg?s=612x612&w=0&k=20&c=CCEZwDEunJf9nPftUspeJJgMK7JNIqBYEBbtfpqJeFE="
              alt="picture4"
              className="w-full h-full object-cover rounded-[2.5rem]"
            />
          </div>
          {/* PICTURE 5 */}
          <div className=" md:h-[11rem] bg-gray-700 rounded-[2.5rem]">
            <img
              src={dentstistImage}
              alt="picture5"
              className="w-full h-full object-cover rounded-[2.5rem]"
            />
          </div>
        </div>

        {/* PICTURE 6 */}
        <div className="md:col-span-3 col-span-1 md:h-[23rem] bg-gray-800 rounded-[2.5rem]">
          <img
            src="https://i.pinimg.com/736x/9f/f7/d1/9ff7d1a690e7bf508eda106f9bc13dab.jpg"
            alt="picture6"
            className="w-full h-full object-cover rounded-[2.5rem]"
          />
        </div>
        {/* PICTURE 7 */}
        <div className="md:col-span-3 col-span-1 md:h-[23rem] bg-gray-900 rounded-[2.5rem]">
          <img
            src="https://t4.ftcdn.net/jpg/04/45/72/21/360_F_445722151_OqUvUDOnmuxqRwtP7NB0xRH0bQqhvCz8.jpg"
            alt="picture7"
            className="w-full h-full object-cover rounded-[2.5rem]"
          />
        </div>
      </div>
    </div>
  );
};

export default Office;
