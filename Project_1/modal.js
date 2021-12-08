const btnModalOpen = document.querySelector(".modal-open");
// const body = document.querySelector("body");

const modal = $.modal({
  title: 'Vladilen Modal',
  closable: true,
  content: `
    <h4>Modal is working</h4>
    <p>Lorem ipsum dolor sit.</p>
    <p>Lorem ipsum dolor sit.</p>
    `,
  width: '400px',
})

btnModalOpen.addEventListener("click", () => {
  modal.open()
});