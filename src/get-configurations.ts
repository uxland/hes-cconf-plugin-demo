import {IHESCConfSection,PluginDefinition} from "@uxland/hes-cconf-shell";

const buildHarmonixPlugins = (configurationSections: IHESCConfSection[]) => { 
  const plugins = configurationSections
    .map((c) => c.plugins)
    .flat()
    .map((p) => {
      return {
        pluginId: p.pluginId,
        importer: ()=>import(p.pluginUrl),
      };
    });
  return plugins;
}

export const getConfigurationsAndPlugins = async () => {
  const configurationSections = await fetchConfigurations();
  const plugins = buildHarmonixPlugins(configurationSections) as PluginDefinition[];
  return {configurationSections, plugins};
};


export const fetchConfigurations = () => {
    return Promise.resolve([
        {
            id: "notifications",
            name: "Notificacions",
            description: "Configuració i manteniment de notificacions i alertes",
            icon: "notification",
            tags: ["configurations"],
            plugins: [
                {
                    pluginId: "patient-notifications-native",
                    pluginUrl: "./plugins/native/plugin",
                    name: "Notificacions del pacient native",
              },
              {
                    pluginId: "patient-notifications-iframe",
                    pluginUrl: "./plugins/iframe/plugin",
                    name: "Notificacions del pacient iframe",
              },
              {
                    pluginId: "patient-notifications-new-window",
                    pluginUrl: "./plugins/new-window-url/plugin",
                    name: "Notificacions del pacient new window",
                },
            ],
        },
    ]);
}
