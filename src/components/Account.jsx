import MarieDoe from '../assets/MarieDoe.png'
const Account = () => {
  return (
    <div className="max-w-md min-h-full mx-auto mt-10 border  border-gray-200 rounded shadow-sm">
      <div className="bg-white px-6 py-4">
        <h2 className="text-lg font-medium">Account Settings</h2>
      </div>

      <div className="bg-gray-50 px-6 py-4 border-b border-dotted border-gray-300">
        <div className="flex items-center space-x-4">
          <img
            src={MarieDoe}
            alt="Profile"
            className="w-16 h-16 rounded-[40%] object-cover"
          />
          <div>
            <p className="font-semibold">Marry Doe</p>
            <p className="text-sm text-gray-600">marry@gmail.com</p>
          </div>
        </div>
        <p className="mt-4 text-sm text-gray-700">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadip Scing Elitr. Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
          Erat, Sed Diam.
        </p>
      </div>
      <div className='bg-gray-50 min-h-[60vh]'>

      </div>
    </div>
  );
};

export default Account;
