const PreferencesPage = () => {
  return (
    <div className="p-6 w-2/3 mx-auto bg-white rounded-lg shadow-md">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Preferences</h2>
          <a href="#" className="text-[#07689F] text-sm hover:underline">
            Edit
          </a>
        </div>
        <p className="text-gray-600 mb-4 font-[Subtitle]">
          Change Your Language, Currency, And Accessibility Requirements.
        </p>
        <div className="">
          <div>
            <p className="text-sm font-bold text-gray-700">Currency</p>
            <p className="text-gray-900">U.S Dollar</p>
          </div>
          <div>
            <p className="text-sm font-bold text-gray-700">Language</p>
            <p className="text-gray-900 flex items-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_Kingdom.svg"
                alt="UK Flag"
                className="w-6 h-4 mr-2"
              />
              United Kingdom English
            </p>
          </div>
          <div>
            <p className="text-sm font-bold text-gray-700">
              Accessibility Requirements
            </p>
            <p className="text-gray-900">
              Filter Out Properties That Don’t Meet Your Needs
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreferencesPage;
