import * as React from 'react';
const Library = ({ item, bypassMetaKey }) => {
  const metaKeys = Object.keys(item.meta);

  function capitalizeFirstLetter(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }


  return (
    <div>
      <h2
        key={item.name}
        className="p-2 border-l-2 border-blue-500 dark:bg-blue-50 font-small font-bold leading-tight text-md mt-4 text-blue-600"
      >
        <a href={item.url} target="new">
          {item.name}
        </a>
      </h2>
      <div className="mt-2">{item.description}</div>
      {metaKeys && metaKeys.length > 0 && (
        <div>
          {metaKeys.map(
            (key: string) =>
              key !== bypassMetaKey && Array.isArray(item.meta[key]) && item.meta[key].length && (
                <span className="inline-block mr-4 mt-2">
                  <span className="text-xs inline-block p-2  leading-none text-center whitespace-nowrap align-baseline font-bold bg-blue-600 text-white rounded-full">
                    {capitalizeFirstLetter(key)}
                    <span className="rounded-full bg-white text-blue-600 ml-1 px-1.5 py-0.5">
                      {item.meta[key].length}
                    </span>
                  </span>
                  {item.meta[key] &&
                    Array.isArray(item.meta[key]) &&
                    item.meta[key].map((tech: string) => (
                      <span className="ml-2 text-xs inline-block p-2 leading-none text-center whitespace-nowrap align-baseline font-bold bg-orange-500 text-white rounded-full">
                        {capitalizeFirstLetter(tech)}
                      </span>
                    ))}
                </span>
              )
          )}
        </div>
      )}
    </div>
  );
};
export default Library;
