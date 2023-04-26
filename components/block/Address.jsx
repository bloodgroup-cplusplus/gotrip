const Address = () => {
  const addressContent = [
    {
      id: 1,
      colClass: "col-lg-3",
      title: "Address",
      content: (
        <>NIELIT, Gangtok , Indira By Pass Road, Near KBT Petrol Pump, Sichey Barpipal, Gangtok 737101,East Sikkim</>
      ),
    },
    {
      id: 2,
      colClass: "col-auto",
      title: "Toll Free Customer Care",
      content: (
        <>
          <a href="tel:+917076680559">7076680559</a>
        </>
      ),
    },
    {
      id: 3,
      colClass: "col-auto",
      title: "Need live support?",
      content: (
        <>
          {" "}
          <a href="mailto:i@gotrip.com">hi@gotrip.com</a>
        </>
      ),
    },
  ];
  return (
    <>
      {addressContent.map((item) => (
        <div className={`${item.colClass}`} key={item.id}>
          <div className="text-14 text-light-1">{item.title}</div>
          <div className="text-18 fw-500 mt-10">{item.content}</div>
        </div>
      ))}
    </>
  );
};

export default Address;
