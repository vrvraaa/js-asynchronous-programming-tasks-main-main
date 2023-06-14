import fsp from 'fs/promises';
import path from 'path';

export async function exchange(...filepaths) {
  try {
    const contents = await Promise.all(filepaths.map((filepath) => fsp.readFile(filepath, 'utf-8')));
    await Promise.all(
      contents.map((content, index) => fsp.writeFile(filepaths[(index + 1) % filepaths.length], content))
    );
  } catch (err) {
    console.log(err);
  }
}

export default exchange;
//END HERE