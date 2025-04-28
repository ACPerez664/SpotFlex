import React from "react";
import { useForm } from "react-hook-form";

type FormData = {
  unidadeNegocio: string;
  tipoRequisicao: string;
  armadores: string[];
  cargaPerigosa: string;
  unNumber?: string;
  classeIMO?: string;
  commodity: string;
  tipoServico: string;
  pontoOrigem: string;
  portoOrigem: string;
  portoDestino: string;
  destinoFinal: string;
  tipoContainer: string;
  tamanhoContainer: string;
  quantidadeContainers: number;
  dataEmbarque: string;
  mesmoNavio: string;
  datasEmbarqueSeparadas?: string;
  observacoes?: string;
};

const RequestForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<FormData>();

  // Função que vai rodar ao clicar no "Enviar"
  const onSubmit = (data: FormData) => {
    console.log(data); // (Opcional) Ver dados no console
    window.location.href = "/thank-you"; // Redireciona para página de sucesso
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>SpotFlex</h2>

      {/* Seus campos já existentes aqui, sem necessidade de mudar */}
      {/* Exemplo abaixo */}
      
      <div>
        <label>Unidade de Negócio</label>
        <select {...register("unidadeNegocio", { required: true })}>
          <option value="">Selecione...</option>
          <option value="Crop Protection">Crop Protection</option>
          <option value="Seeds">Seeds</option>
          <option value="Biological">Biological</option>
        </select>
      </div>

      {/* (repita aqui os outros campos como estavam) */}

      <button type="submit" style={{ marginTop: "20px" }}>Enviar</button>
    </form>
  );
};

export default RequestForm;
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();
  const cargaPerigosa = watch("cargaPerigosa");
  const mesmoNavio = watch("mesmoNavio");

  const onSubmit = (data: FormData) => {
    console.log("Dados enviados:", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ maxWidth: "700px", margin: "0 auto", padding: "20px" }}
    >
      <h2>SpotFlex</h2>

      {/* 1. Unidade de Negócio */}
      <div>
        <label>Unidade de Negócio</label>
        <br />
        <select
          {...register("unidadeNegocio", { required: "Campo obrigatório" })}
        >
          <option value="">Selecione...</option>
          <option value="Crop Protection">Crop Protection</option>
          <option value="Seeds">Seeds</option>
          <option value="Biological">Biological</option>
        </select>
        {errors.unidadeNegocio && (
          <p style={{ color: "red" }}>{errors.unidadeNegocio.message}</p>
        )}
      </div>

      {/* 2. Tipo de Requisição */}
      <div>
        <label>Tipo de Requisição</label>
        <br />
        <input
          type="radio"
          value="Normal"
          {...register("tipoRequisicao", { required: "Campo obrigatório" })}
        />{" "}
        Normal
        <input
          type="radio"
          value="Urgente"
          {...register("tipoRequisicao")}
          style={{ marginLeft: "10px" }}
        />{" "}
        Urgente
        {errors.tipoRequisicao && (
          <p style={{ color: "red" }}>{errors.tipoRequisicao.message}</p>
        )}
      </div>

      {/* 3. Armadores para Cotação */}
      <div>
        <label>Armadores para Cotação (máx. 3)</label>
        <br />
        <input type="checkbox" value="Maersk" {...register("armadores")} />{" "}
        Maersk
        <input
          type="checkbox"
          value="Hapag"
          {...register("armadores")}
          style={{ marginLeft: "10px" }}
        />{" "}
        Hapag
        <input
          type="checkbox"
          value="CMA CGM"
          {...register("armadores")}
          style={{ marginLeft: "10px" }}
        />{" "}
        CMA CGM
      </div>

      {/* 4. Carga Perigosa */}
      <div>
        <label>Carga Perigosa?</label>
        <br />
        <input
          type="radio"
          value="Sim"
          {...register("cargaPerigosa", { required: "Campo obrigatório" })}
        />{" "}
        Sim
        <input
          type="radio"
          value="Não"
          {...register("cargaPerigosa")}
          style={{ marginLeft: "10px" }}
        />{" "}
        Não
        {errors.cargaPerigosa && (
          <p style={{ color: "red" }}>{errors.cargaPerigosa.message}</p>
        )}
      </div>

      {/* Se carga perigosa == "Sim" */}
      {cargaPerigosa === "Sim" && (
        <>
          <div>
            <label>UN Number</label>
            <br />
            <input
              type="number"
              {...register("unNumber", { required: "Campo obrigatório" })}
            />
            {errors.unNumber && (
              <p style={{ color: "red" }}>{errors.unNumber.message}</p>
            )}
          </div>
          <div>
            <label>Classe IMO</label>
            <br />
            <input
              type="number"
              {...register("classeIMO", { required: "Campo obrigatório" })}
            />
            {errors.classeIMO && (
              <p style={{ color: "red" }}>{errors.classeIMO.message}</p>
            )}
          </div>
        </>
      )}

      {/* 5. Commodity */}
      <div>
        <label>Commodity</label>
        <br />
        <select {...register("commodity", { required: "Campo obrigatório" })}>
          <option value="">Selecione...</option>
          <option value="FAK">FAK (Freight All Kind)</option>
          <option value="Seeds">Seeds</option>
        </select>
        {errors.commodity && (
          <p style={{ color: "red" }}>{errors.commodity.message}</p>
        )}
      </div>

      {/* 6. Tipo de Serviço */}
      <div>
        <label>Tipo de Serviço</label>
        <br />
        <input value="Port to Port" readOnly {...register("tipoServico")} />
      </div>

      {/* 7. Ponto de Origem/Coleta */}
      <div>
        <label>Ponto de Origem/Coleta</label>
        <br />
        <input
          {...register("pontoOrigem", { required: "Campo obrigatório" })}
          placeholder="Ex: Planta Germina, Brasil, São Paulo – SP"
        />
        {errors.pontoOrigem && (
          <p style={{ color: "red" }}>{errors.pontoOrigem.message}</p>
        )}
      </div>

      {/* 8. Porto de Origem */}
      <div>
        <label>Porto de Origem (Nome + UN/LOCODE)</label>
        <br />
        <input
          {...register("portoOrigem", { required: "Campo obrigatório" })}
          placeholder="Ex: Santos – BRSSZ"
        />
        {errors.portoOrigem && (
          <p style={{ color: "red" }}>{errors.portoOrigem.message}</p>
        )}
      </div>

      {/* 9. Porto de Destino */}
      <div>
        <label>Porto de Destino (Nome + UN/LOCODE)</label>
        <br />
        <input
          {...register("portoDestino", { required: "Campo obrigatório" })}
          placeholder="Ex: Altamira – MXATM"
        />
        {errors.portoDestino && (
          <p style={{ color: "red" }}>{errors.portoDestino.message}</p>
        )}
      </div>

      {/* 10. Destino Final */}
      <div>
        <label>Destino Final (País + Cidade)</label>
        <br />
        <input
          {...register("destinoFinal", { required: "Campo obrigatório" })}
          placeholder="Ex: México, Altamira"
        />
        {errors.destinoFinal && (
          <p style={{ color: "red" }}>{errors.destinoFinal.message}</p>
        )}
      </div>

      {/* 11. Tipo de Contêiner */}
      <div>
        <label>Tipo de Contêiner</label>
        <br />
        <select
          {...register("tipoContainer", { required: "Campo obrigatório" })}
        >
          <option value="">Selecione...</option>
          <option value="Dry Standard">Dry Standard</option>
          <option value="Dry High Cube">Dry High Cube</option>
          <option value="Reefer">Reefer</option>
          <option value="Isotank">Isotank</option>
        </select>
        {errors.tipoContainer && (
          <p style={{ color: "red" }}>{errors.tipoContainer.message}</p>
        )}
      </div>

      {/* 12. Tamanho do Contêiner */}
      <div>
        <label>Tamanho do Contêiner</label>
        <br />
        <select
          {...register("tamanhoContainer", { required: "Campo obrigatório" })}
        >
          <option value="">Selecione...</option>
          <option value="20 pés">20 pés</option>
          <option value="40 pés">40 pés</option>
        </select>
        {errors.tamanhoContainer && (
          <p style={{ color: "red" }}>{errors.tamanhoContainer.message}</p>
        )}
      </div>

      {/* 13. Quantidade de Contêineres */}
      <div>
        <label>Quantidade de Contêineres</label>
        <br />
        <input
          type="number"
          {...register("quantidadeContainers", {
            required: "Campo obrigatório",
            min: 1,
          })}
        />
        {errors.quantidadeContainers && (
          <p style={{ color: "red" }}>{errors.quantidadeContainers.message}</p>
        )}
      </div>

      {/* 14. Data Prevista de Embarque */}
      <div>
        <label>Data Prevista de Embarque</label>
        <br />
        <input
          type="date"
          {...register("dataEmbarque", { required: "Campo obrigatório" })}
        />
        {errors.dataEmbarque && (
          <p style={{ color: "red" }}>{errors.dataEmbarque.message}</p>
        )}
      </div>

      {/* 15. Todos contêineres no mesmo navio? */}
      <div>
        <label>Todos os contêineres embarcarão no mesmo navio?</label>
        <br />
        <input
          type="radio"
          value="Sim"
          {...register("mesmoNavio", { required: "Campo obrigatório" })}
        />{" "}
        Sim
        <input
          type="radio"
          value="Não"
          {...register("mesmoNavio")}
          style={{ marginLeft: "10px" }}
        />{" "}
        Não
        {errors.mesmoNavio && (
          <p style={{ color: "red" }}>{errors.mesmoNavio.message}</p>
        )}
      </div>

      {/* Se "Não" */}
      {mesmoNavio === "Não" && (
        <div>
          <label>Informe a data desejada de embarque para cada contêiner</label>
          <br />
          <textarea
            {...register("datasEmbarqueSeparadas")}
            placeholder="Ex: Contêiner 1: 01/10/2025, Contêiner 2: 05/10/2025"
          />
        </div>
      )}

      {/* 17. Observações */}
      <div>
        <label>Observações ou considerações importantes</label>
        <br />
        <textarea {...register("observacoes")} placeholder="Escreva aqui..." />
      </div>

      <button type="submit" style={{ marginTop: "20px" }}>
        Enviar
      </button>
    </form>
  );
};

export default RequestForm;
