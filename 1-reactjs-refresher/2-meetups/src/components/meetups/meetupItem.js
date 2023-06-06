function MeetupItem({id, image, title, address, description }) {
  return (
    <div className="bg-stone-50 rounded-lg shadow-md overflow-hidden">
      <img className="w-full" src={image} alt={title} />
      <div className="p-4">
        <div className='mb-4'>
          <h2 className="uppercase font-bold text-md">{title}</h2>
          <h3 className="mb-4 text-sm">{address}</h3>
          <p>{description}</p>
        </div>
        <div className="flex justify-end">
          <button className="px-3 py-2 bg-stone-950 hover:bg-stone-900 transition-colors text-stone-50 rounded-md">
            Favorite
          </button>
        </div>
      </div>
    </div>
  );
}

export default MeetupItem;
