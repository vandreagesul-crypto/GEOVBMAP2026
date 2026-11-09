/**
 * Note: When using the Node.JS APIs, the config file
 * doesn't apply. Instead, pass options directly to the APIs.
 *
 * All configuration options: https://remotion.dev/docs/config
 */

import { Config } from "@remotion/cli/config";

Config.setRspack(true);
Config.setVideoImageFormat("jpeg");
Config.setOverwriteOutput(true);
Config.setDefaultPremountInSeconds(2);

// Navegador opcional: se REMOTION_BROWSER estiver definido, usa esse executável
// (ex.: ambientes sem acesso ao download do Chrome Headless Shell).
// Sem a variável, o Remotion baixa e usa o navegador oficial.
Config.setBrowserExecutable(process.env.REMOTION_BROWSER ?? null);
