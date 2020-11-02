export const createMicrophone = async(microphone) => {
  const res = await fetch('http://7892/api/v1/microphones', {
    method: 'POST',
    body: JSON.stringify(microphone),
    headers: { 'Content-type': 'application/json; charset=UTF-8' }
  });

  if(!res.ok) throw ('Bad request, failed to fetch')

  return await res.json();

};
