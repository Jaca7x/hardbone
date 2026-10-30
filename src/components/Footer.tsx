import { Logo } from "@/components/Header";
import { credito, estudio, imagens, navegacao, rodape } from "@/content";
import { externo } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="on-dark bg-ink pb-28 text-paper sm:pb-12">
      <div className="mx-auto grid max-w-7xl gap-10 border-t border-line-dark px-4 pt-12 sm:px-6 md:grid-cols-12 lg:px-10">
        <div className="md:col-span-5">
          <Logo escuro />
          {rodape.textoEstudio ? (
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-muted">{rodape.textoEstudio}</p>
          ) : (
            <p className="label mt-5 w-fit border border-dashed border-line-dark px-3 py-2 text-[0.65rem] text-ink-muted">
              Texto do estúdio: uma frase curta sobre o estúdio
            </p>
          )}
        </div>

        <nav aria-label="Rodapé" className="md:col-span-3">
          <h2 className="label text-ink-muted">Navegação</h2>
          <ul className="mt-4 grid gap-2">
            {navegacao.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="link-sublinhado">
                  {item.rotulo}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-4">
          <h2 className="label text-ink-muted">Contato</h2>
          <ul className="mt-4 grid gap-2 text-paper/90">
            <li>
              {estudio.endereco.rua}, {estudio.endereco.bairro}, {estudio.endereco.cidade}
            </li>
            <li>{estudio.horarioCurto}</li>
            <li>
              <a href={estudio.telefone.link} className="link-sublinhado">
                {estudio.telefone.exibicao}
              </a>
            </li>
          </ul>
        </div>
      </div>

      {imagens.ilustrativas && (
        <div className="mx-auto mt-12 max-w-7xl px-4 sm:px-6 lg:px-10">
          <p className="flex gap-3 border border-dashed border-line-dark p-4 text-sm leading-relaxed text-ink-muted">
            <span aria-hidden="true" className="mt-1.5 size-2 shrink-0 rounded-full bg-red-on-dark" />
            <span>
              <strong className="font-medium text-paper">Aviso: </strong>
              {imagens.aviso} Fotos:{" "}
              <a href={imagens.fonte.url} {...externo} className="link-sublinhado text-paper">
                {imagens.fonte.rotulo}
              </a>
              .
            </span>
          </p>
        </div>
      )}

      <div className="label mx-auto mt-8 flex max-w-7xl flex-col gap-4 px-4 text-[0.65rem] text-ink-muted sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-10">
        <p>
          © {new Date().getFullYear()} {estudio.nome}
        </p>
        <a
          href={credito.url}
          {...externo}
          className="inline-flex w-fit items-center gap-2 border border-line-dark px-3 py-1.5 transition-colors hover:border-paper/50 hover:text-paper"
        >
          <span aria-hidden="true" className="size-1.5 rounded-full bg-red-on-dark" />
          {credito.texto} — {credito.site}
        </a>
      </div>
    </footer>
  );
}
