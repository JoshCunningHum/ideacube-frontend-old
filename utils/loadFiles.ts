import fs from 'fs';
import path from 'path';

export default <T>(folder: string, extension:string ='ts') : Array<T> => {
    const files = fs.readdirSync(folder).filter(file => file.endsWith(extension));
    return files.map(file => require(path.join(folder, file)) as T);
}