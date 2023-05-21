import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="bg-teal-100">
      <nav className="p-2">
        <ul className="text-black">
          <li>
            <Link href="/">ホーム</Link>
          </li>
          <li>
            <Link href="/users">ユーザー一覧</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
