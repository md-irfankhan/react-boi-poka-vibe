import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getReadData, getWishData } from '../../DB/db';
import ListCard from '../ListCard/ListCard';

const ReadList = () => {
    const data=useLoaderData()
    const ReadLS=getReadData()
    const ReadData=data.filter(idx=>ReadLS.includes(idx.bookId))
    console.log(ReadData);
    const WishLS=getWishData()
    const WishData=data.filter(idx=>WishLS.includes(idx.bookId))
  
    
    return (
        <div>
            <Tabs>
                <TabList>
                    <Tab>Read</Tab>
                    <Tab>WishList</Tab>
                </TabList>

                <TabPanel>
                    {
                        ReadData.map(book=><ListCard book={book}></ListCard>)
                    }
                </TabPanel>
                <TabPanel>
                      {
                        WishData.map(book=><ListCard book={book}></ListCard>)
                    }
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ReadList;