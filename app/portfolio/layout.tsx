import Breadcrumb from '@/components/breadcrumb';
import Caption from '@/components/caption';
import { ProjectProvider } from '@/context/portfolio-provider';


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {' '}
      <section>
        <div className="container">
          <Breadcrumb pageTitle="PortFolio" />
          <Caption className="mt-20">PortFolio</Caption>
              {children}
        </div>
      </section>
    </>
  );
}
