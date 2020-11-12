const [listJeux, setListJeux] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("http://localhost:3000/listJeux");
      setListJeux(result.data.results);
    };
    fetchData();
  }, []);



  
