import { getDb, putDb } from './database';
import { header } from './header';

export default class {
  constructor() {
    // Initialize the editor
    this.initEditor();
  }

  async initEditor() {
    const localData = localStorage.getItem('content');

    // check if CodeMirror is loaded
    if (typeof CodeMirror === 'undefined') {
      throw new Error('CodeMirror is not loaded');
    }

    this.editor = CodeMirror(document.querySelector('#main'), {
      value: '',
      mode: 'javascript',
      theme: 'monokai',
      lineNumbers: true,
      lineWrapping: true,
      autofocus: true,
      indentUnit: 2,
      tabSize: 2,
    });

    try {
      // Wait for the database initialization and content retrieval
      const data = await getDb();
      console.log('Data retrieved from IndexedDB:', data); // Check if data is being retrieved
      console.info('Loaded data from IndexedDB, injecting into editor');
      this.editor.setValue(data.join('\n') || localData || header); // Join the array of lines with newlines
    } catch (error) {
      console.error('Error retrieving data from IndexedDB:', error);
      this.editor.setValue(localData || header);
    }

    this.editor.on('change', () => {
      localStorage.setItem('content', this.editor.getValue());
    });

// Save the content of the editor when the editor itself loses focus
this.editor.on('blur', async () => {
  console.log('The editor has lost focus');
  const content = this.editor.getValue();
  const lines = content.split('\n').filter((line) => line.trim() !== ''); // Remove empty lines
  await putDb(lines); // Save the content as an array of strings
});

  }
}
