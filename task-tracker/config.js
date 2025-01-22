import { fileURLToPath } from "url";
import { dirname } from "path";

export const __filename = fileURLToPath(import.meta.url)
export const __dirname = dirname(__filename)

//NOTE - Esmodule doesn't support __dirname out of the box, so i used this config to create a __dirname and
// "test"
