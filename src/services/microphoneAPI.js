export const createMicrophone = async(microphone) => {
  const res = await fetch('http://localhost:7890/api/v1/microphones', {
    method: 'POST',
    body: JSON.stringify(microphone),
    headers: { 'Content-type': 'application/x-www-form-urlencoded' }
  });

  if(!res.ok) throw ('Bad request, failed to fetch');

  return await res.json();

};
