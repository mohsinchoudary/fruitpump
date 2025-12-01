// copy the mint address
document.addEventListener('DOMContentLoaded', () => {
  const copyBtn = document.getElementById('copyBtn');
  if(copyBtn){
    copyBtn.addEventListener('click', async () => {
      const text = document.getElementById('mint').innerText.trim();
      try {
        await navigator.clipboard.writeText(text);
        copyBtn.textContent = 'Copied';
        setTimeout(()=> copyBtn.textContent = 'Copy', 1500);
      } catch(e){
        alert('Copy failed — select and copy manually.');
      }
    });
  }
});
