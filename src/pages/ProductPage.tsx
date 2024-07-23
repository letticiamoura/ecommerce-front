import Layout from "./Layout";
import Section from "../components/Section";
import ProductListing from "../components/ProductListing";
import FilterGroup from "../components/FilterGroup";
import FilterProduct from "../components/FilterProduct";

export default function ProductPage(){
    return(
        <Layout>
        <Section className='bg-light-gray-3'>
            <div className='flex w-full justify-between items-center px-10 py-14'>
                <p className='text-base text-dark-gray-2'><span className='font-bold'>Resultados para "Tênis" -</span> 389 produtos</p>
                <FilterProduct />
            </div>
            <div className='flex gap-x-8 pb-20'>
                <div className='bg-white h-fit ml-10 px-5 py-6'>
                    <h1 className="text-sm font-bold text-dark-gray-2">Filtrar por</h1>
                    <hr className='w-[248px] my-5 bg-light-gray-2'></hr>    
                    <FilterGroup title="Marca" inputType="checkbox" options={[{text:'Abibas', value:'abibas'}, {text:'Dalenciaga', value:'Dalenciaga'}, {text:'K-Swiss', value:'K-Swiss'}, {text:'Nika', value:'Nika'}, {text:'Fuma', value:'Fuma'}]} />
                    <FilterGroup title="Gênero" inputType="checkbox" options={[{text:'Masculino', value:'Masculino'}, {text:'Feminino', value:'Feminino'}, {text:'Unisex', value:'Unisex'}]} />
                    <FilterGroup title="Categoria" inputType="checkbox" options={[{text:'Esporte e lazer', value:'Esporte e lazer'}, {text:'Casual', value:'Casual'}, {text:'Utilitário', value:'Utilitário'}, {text:'Corrida', value:'Corrida'}]} />
                    <FilterGroup title="Marca" inputType="radio" options={[{text:'Novo', value:'Novo'}, {text:'Usado', value:'Usado'}]} />
                </div>
                <ProductListing />
            </div>
        </Section>
        </Layout>
    );
}
