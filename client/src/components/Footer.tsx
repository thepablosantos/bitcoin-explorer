const Footer = () => {
  return (
    <footer className="bg-gray-900 py-4 text-center text-sm text-gray-400 mt-auto border-t border-gray-700">
      <p>
        © {new Date().getFullYear()} Bitcoin Explorer - Todos os direitos reservados.
      </p>
    </footer>
  );
};

export default Footer;
