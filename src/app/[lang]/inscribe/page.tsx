import Brc20Minter from "@/components/Brc20Minter";
import Navigator from "@/components/Navigator";
import initTranslations from "@/locales/initI18n";
import TranslationsProvider from "@/components/TranslationsProvider";

export default async function Inscribe({ params: { lang } }: any) {
  const i18nNamespaces = ["common"];
  const { resources } = await initTranslations(lang, i18nNamespaces);
  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={lang}
      resources={resources}
    >
      <div className="sm:max-w-[420px] w-full relative sm:h-[800px] sm:max-h-[80vh] border-black border-0 sm:border overflow-auto">
        <main className="flex min-h-screen flex-col items-center p-4  !pb-20">
          <Brc20Minter />
        </main>
        <Navigator />
      </div>
    </TranslationsProvider>
  );
}
