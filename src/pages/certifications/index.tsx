import Section from '../../components/section';
import data from '../../data/filesPath';
import CarouselCustom from '../../components/Carousel';



function Certifications() {
    return data ? (
        <Section elementName="Certifications" HeaderText='Certification' customstyle="background-color: var(--primary);">
            <CarouselCustom Itens={data}/>
        </Section>
    ):<>

    </>
};

export default Certifications;