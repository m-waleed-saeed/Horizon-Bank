import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'

const Home = () => {
  const loggedIn = { firstName: "Muhammad", lastName: "Waleed", email: 'weedimian@gmail.com' }
  return (
    <section className="home">
      <div className='home-content'>
        <header className="home-header">
          <HeaderBox type="greeting" title="Welcome" user={loggedIn?.firstName || "Guest"} subtext="Access and manage your account and transactions efficiently." />
          <TotalBalanceBox accounts={[]} totalBanks={1} totalCurrentBalance={1350.35} />
        </header>
        RECENT TRANSACTION
      </div>
      <RightSidebar user={loggedIn} transactions={[]} banks={[{ currentBalance: 500.55 }, { currentBalance: 300 }]} />
    </section>
  )
}

export default Home