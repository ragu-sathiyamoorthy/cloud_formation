const username = 'ragu-sathiyamoorthy';
const repository = 'cloud_formation';
const path = 'path/Scripts.json';
const token = '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;

const jsonData = { /* Your JSON data here */ };

const fileContent = JSON.stringify(jsonData, null, 2);

fetch(`https://api.github.com/repos/${username}/${repository}/contents/${path}`, {
  method: 'PUT',
  headers: {
    'Authorization': `token ${token}`,
  },
  body: JSON.stringify({
    message: 'Update JSON file',
    content: btoa(fileContent),
    sha: 'The SHA hash of the existing file (if it exists)',
  }),
})
  .then(response => response.json())
  .then(data => {
    console.log('File created:', data);
  })
  .catch(error => {
    console.error('Error creating file:', error);
  });
