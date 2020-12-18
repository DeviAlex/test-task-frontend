export const NewItemForm = () => {
  const targetForm = document.querySelector('[data-form="new_item"]');
  const inputFile = targetForm.querySelector('[data-input-file]');

  inputFile.addEventListener('change', function () {
    const uploadedText = targetForm.querySelector('[data-file-uploaded-text]')

    for (let x = 0; x < this.files.length; x++) {
      let file = this.files[x]
      const value = uploadedText.value
      uploadedText.value = `${value ? `${value}, ` : ''}${file.name}`
    }
  });
}
