interface TabItem {
  title: string;
  icon: React.ReactNode;
}

export interface ITabsProps {
  tabs: TabItem[]; // Array de objetos con título e icono de cada pestaña
  setSelected: (index: number) => void; // Función para cambiar la pestaña seleccionada
  children: React.ReactNode;
}
