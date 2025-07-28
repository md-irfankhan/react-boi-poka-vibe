import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getReadData } from '../../DB/db';
import ListCard from '../ListCard/ListCard';

const ReadList = () => {
    const data=useLoaderData()
    const ReadLS=getReadData()
    const ReadData=data.filter(idx=>ReadLS.includes(idx.bookId))
    console.log(ReadData);
    
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
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ReadList;