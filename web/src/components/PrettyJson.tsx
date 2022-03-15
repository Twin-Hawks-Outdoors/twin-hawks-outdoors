import React from 'react';

function PrettyJson(data: any) {
  return <pre className="max-w-full">{JSON.stringify(data, null, 2)}</pre>;
}

export default PrettyJson;
