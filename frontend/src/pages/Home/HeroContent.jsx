const HeroContent = () => {
  return (
    <div className="w-full p-8">
      <div className="flex justify-center mb-8">
        <div className="w-full ">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-semibold leading-snug">
              Gentle, friendly treatment from our locally-owned practice.
            </h2>
          </div>

          <div className="flex flex-col md:flex-row md:space-x-20">
            <div className="w-full md:w-1/3 mb-4 md:mb-0">
              <hr className="border-t-2 border-gray-300" />
              <div className="text-start mt-4">
                <h3 className="text-xl font-semibold text-gray-500">01.</h3>
                <p className="text-md mt-2 text-gray-500">
                  <strong>Tight Schedule? No worries!</strong>
                  <br />
                  We offer comprehensive dentistry five days a week, and are
                  ready for{" "}
                  <a href="/emergencies" className="text-primary ">
                    emergency treatment
                  </a>{" "}
                  when you need it.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 mb-4 md:mb-0">
              <hr className="border-t-2 border-gray-300" />
              <div className="text-start mt-4">
                <h3 className="text-xl font-semibold text-gray-500">02.</h3>
                <p className="text-md mt-2 text-gray-500">
                  <strong>Committed to Safety</strong>
                  <br />
                  We're prioritizing your{" "}
                  <a href="/safety" className="text-primary ">
                    safety
                  </a>{" "}
                  at every step to ensure your visit always reflects the latest
                  guidance and highest industry standards.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 mb-4 md:mb-0">
              <hr className="border-t-2 border-gray-300" />
              <div className="text-start mt-4">
                <h3 className="text-xl font-semibold text-gray-500">03.</h3>
                <p className="text-md mt-2 text-gray-500">
                  <strong>Smiles Without Stress</strong>
                  <br />
                  You'll love your smile and your visit, too! Our{" "}
                  <a href="/our-team" className="text-primary ">
                    friendly team
                  </a>{" "}
                  will help you leave feeling comfortable and confident.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
