
const btn = document.querySelector('btn');
const result = document.querySelector('.result');

const shareData = {
  file: document.getElementById('imgInp').files[0],
  text: '相片',
  title: '發現中小企'
};

btn.addEventListener('click', async () => {
  try {
    await navigator.share(shareData);
    result.textContent = '感謝你的的分享';
  } catch (err) {
    const { name, message } = err;
    if (name === 'AbortError') {
      result.textContent = '您已取消分享此訊息';
    } else {
      result.textContent = err;
      console.log('發生錯誤', err);
    }
  }
});