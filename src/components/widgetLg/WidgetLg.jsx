import React from "react";
import "./WidgetLg.css";

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>
  }
  return (
    <div className="WidgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="WidgetLgUser">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx-1u-Y_8NZytcazSjNPxlA9BHiBUOCjquMRzhj7ZKEuIi07yToe9-24Y0wLr9f1m61xc&usqp=CAU"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">2 Jun 2022</td>
          <td className="widgetLgAmount">$ 122.00</td>
          <td className="widgetLgStatus">
              <Button type="Approved" />
          </td>
        </tr>

        
        <tr className="widgetLgTr">
          <td className="WidgetLgUser">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrkoEdZDyEh48WYc0TZiYYon1VOKfdXySdJ58IPS8U2imbtb_W2YJ7GJ8hkj2GMquFH0E&usqp=CAU"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">16 Jun 2022</td>
          <td className="widgetLgAmount">$ 172.00</td>
          <td className="widgetLgStatus">
              <Button type="Pending" />
          </td>
        </tr>

        <tr className="widgetLgTr">
          <td className="WidgetLgUser">
            <img
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAPDw8PEA8PDw8QDxAVDw8QDw8PDw8QFREWFhURFRUYHSggGBolGxUWITEhJSkrLi4uFx8zODMtNygvLisBCgoKDg0OFxAQFy0dHR8rKy0tLSstKy0rLSstLSstKy0tKy0tLSstLSstLS0tLSstLS0tLS0tLS0tKystLS0tLf/AABEIALwBDAMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAABAgAEAwUGB//EAD8QAAIBAgMDCQQHCAIDAAAAAAABAgMRBBIhBTFBBhMiUWFxgZGhMrHB8CNCUnKSstEHFDNigsLh8STSQ2Rz/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAECAwT/xAAgEQEBAAIDAAIDAQAAAAAAAAAAAQIRAyExEkETIlEy/9oADAMBAAIRAxEAPwDTWDYNg2KyFg2CkGxAtiWGsSwUtiWHsSwCWJYexMoCWAomSx0Wz9lKlBVaqvNq8IvdBdb7Relk20iwDSzVJKlF7s18zXZHf52K862GWinUk/uRivezHt+q88nd63vrr4vgaiVNQpqb3ybtfq6znc3WcboMLWozelNpfzSd/NWReeApvdFrul8Hc0ewm21ePxXh1HTQio+z+H/DLMkuMa2vsuSTlF50uG6S71+hSsdRRqxlpuZX2hstTi6kF0lrKK4rrRqVm4ufsSw7iSxWCWBYyWBYisbQLGSwGgMdgWMjQLAJYFh7AsAjQrRkaFsAjQtjI0LYBbEGsQC3YaxEGxpkLBsFINgFsGw1g2IEsSw9g2KpLBsNYZIDZ8mNnc7WzSV4U+k+pvgvj4G72vNpPr4Fzk3g+awqb0dTpP4eljFj6GeTXgu852uuMcDtHCZ5KK69f5pGXaGyZShHKrqMUdRPZ8YJNrpP2excX4stYahuRxvr0YzpymytnSpwUrWT4p/AyYrFNb9V1715nXPBR6rX323PwNTj+T+a7pys+o3vpj4tJTxV2r/i4rv60dJs2o1a/HjwZzq2ZWpSvKLaW9JaW6+zw8jsNh0I1aDUXdrd1xlvXr87xGa5bb+CVKq8vsT1j+hrbHY7cw3O4VVEtYa91t68OkchY6xwsJYlh7AsEJYlh7AsAjQrRkaBYKxtAaMjQGgMbQrRkaFaCMbQrMjQjClIGxALobBQUjTIJDJEQyQAsSw1g2AWxLDWCkFBIzYalnnCP2pJeF9REjY7Ao58RDsu35W+JFjvpUstOEV9laeF7eXuK1DDauT7dfj5JM2tVK/Yk35KxqOUOJ5mnGmv4lW6XZFWzy9UvE5ZXU27YTd001WpzlSUl7N7RXUloi5QplXCU7GypI5Yx6Mv5Byi5TOrGKpNLjY2ws4XDRqOz38GJisEqD56kss46Tp/VqR3279/zufY2JhOdozi31JplrljV5nDc9lzZWlOK3ypvel29RuebcsvdNPg506s69OLTjOKqRjxSmrST/qT8zg8XQ5uc4P6smvJg5CbXnLbdSm5Zqc6NVR32laWaMkuDfUbzlnhMlfOvZqRUk+DNY3bnnHPEIE0yUgSECksMSwCNCtGSwrQCNCNGVoVoDE0IzK0IwEAM0QC6hrEQyNMgkMkRIZACwQksAEFINghQOh5GU715PqUfV3+Bz50/IWP0lR/c/vJVnrsKsuk0uLivOSv6HEcsq8JYqpKVWUXCKp04xu3Zaydl2tnbUH9I31NP0PO9s7P56s6jSl9NPNCXsyipaX69248/Leo9XDO61tDa84SWSupdkryXi+B1Wy9oc6rOyl1J3RzuzOTtOlnko6zi4x1lLIm07pN2T04Jdty/g8MqOIhlvZq0r8bPfbcLNeVuW32NvtXGypQ09p6K5ye0Mc8y52pLWVt8lBP7Om/wTOs2zh81SDtdJ7u2xrcRsaM4ypyipU5yUnGaU+klbjwtpbdZsa3ezydejyT2rQqONoKUdOlFu6TdlLK7Stdb7WO25XU+c2dWtr9HfXsOY2HgKWHSThmcVanfdTu7ycVwb4nU4uV9n4hvdzVT8rNzyyOWW9y14hyDw+TatOpNtT6ajFbsttZN+7xPSuU+G5zA0Kv1oKz7vlM4rk1Qmq8qz9m1WS3b1DKtf6j07BUFWwHNvW9OVu+7aHFek5p28uINVg4ycXvTafegHVwAgQAQgSAKwNDAAVitDsVgY2hGjK0IQY2AZoUIvoZAQ6NIiCRBAhAkCoEgQAdVyFjrVfavRP9TlWddyHXRqePuS+Bmrj63tOpaVTwOZxUrTf3mb9f+T7yRzmP/iuP2oxlH3Neh5eT6e7gndWqVmilN3rLsZlw0nYo4zFVYVEoUsyzK8uOW29PrXUXbdx7dRi4ZoydrtJP0MNNpxT7CtS2tWjllSiqmtqqmnfLwir/AB3dpYhrHVJPiluXYjTEjHF3kkus2nKqvzWyqyW+UVH8Ukn6FfZuFvO5Q/abirYOVJSyuS3renuTRZ5Wc9XKRy+x6eVSX2YRjvu9+Z3fzvO/5L1foaa7GvU4DYNLJQtduylJtu7bfFvua8jsuTE/o6f9X5i4dOfJ3XK8q8JzWLqq2knmXjqag6/9olC1WlUS9qNn2vecgdnnQhCARBAEAAYSMBWALAwEEMjEARiDsVoiL6GQEOjSIEiCAAkIFFEIQCM6zkTop9z9NTkzqOR76M12y/L/AIZm+NY+tvm9v7xo9rw0pzW+MpR8tUvK5uE9anc/7SjiNVVja7y54/eXRZ5spt6sL8btSoVE1dGs2jt3JJwhTqVJReto2S7nKyY+Fq3s91/aj1dvcXa2D5yO4zHolx+W74pUdtYno/8AGnZ2/iKnTi2+53b14I3OExc5vpUZUu1yjJPusU8JsiUWpZUrdrZuqFC5uHNlhf8AMbPBTUVfsPOuW+0f3nE08PF3tJSnbglqk/FG85S7cWHpuMNZ2sl29vYchsTCt56025TnduT3vt9Bllv9XCTX7N9Rjlw85brxsvh6P0On2BHLCkv5Pezl9qPLRhDdmkvFJ3Os2ZpGFt3Nx7ty8N5vFzyTl3Qz4aE+MH6bmednrG0aCrYacH8p6e5nlNWDjJxe9Np96OscL6UgCFQSACgIQIAAxWMCQCMUZisBGIOxSC/EdCoZGmTIgAgQhCBRIAlyiHQ8k56yXa/y6fE525ueS1T6WUeuLa70Zy8ax9b295SXXF+7/BVqTdoVUvZbzr+W7Ul89hYelWPa2vPT4lHA4pQxFehP2ZTvHsb3nmelqNuU1QrYaavljUipW0zU5TjGS04WlfyN/OHN63vG9uF15GXaeyI1oc3Lh7D7OK8r/KRU2nXtKcHukrrVmcuq3j3GWO049a4cesq4vbvRy01q7LM+F218DQuu1fvKsqzbSXB/PvJ82vhExUedu3rubenVf/BsIRy0LpcLcOMl/kWlQ6Eu73Kw6nmpNd+l+K1LimTLtpWdFd/Vpu60/lHSYCdlB/y/H/XmaDbHSpU5x4JX8NHp4o2Gxq/OUUr9Kna+uri9PekdJe3HKdOswklJSi90k0zz/lVhObxDdvbu32tb/VPzO1wVXVMocutn56XPxXs9L9fT3HTGuWUcHOy6vTr7PiYw5+H6gbNsIEBACQhAIKxhWAjFYzFYCMQdiEGwQyEQyNMnQRUS4BIAgUSXAQAXLuxa+TEUm9zkk+56FrZOwZ1487N83R4St0p/dXx95tf3ajR/h01dfXl0p993u8DGWcnTpjx29rWM6Moy6pJ/PkaDlJN0q6qRV89tO/8A2b2NeOJhJRfTitVx7yjt2hmhQqNey1fw0PNlXqxnjLyb2s6lL6X28z0emWPUVuUUoud09UjT4TEONSTWib0M20Kmdt9hymW3W4fGtPXk72RnwVB72ZsNhHJ3ZtcPgjWMKehS6NjUYhSpSkvqt3T6mdLSo2MWMwkZLU3Y5ytRga2ek6TauvZ6pLqXb3lbCYqeHqJ8NzTvZrivn/eypbI13O3ijZQ2dC1pLN3k3Vsi3gsdFqMk7xfozoopVaMoPVOOnE5elsnL0qDs/rUZPoz7m9z9Db7GruLytNWdnGWkoP7LOuOV+3DPF5zj8M6VWdN/Vk14cDAdNy8weTEKolpUje/b83OZO7zoEBAGIAgEAyAYQrEYzEYUrFGYhBfQyECmaZPcItyXAYlwXBcKY3nJXY/71Vef+DSSlU4X+zDxs/BM0SPQuStLmtnZ/rVpzk+5PIvy+pLdRrGbpdrYxXyxsoxVklokluRoNpYrotLeXcSnKT7zFDZsqjtY8z1+KXIyjUljIySeXj3Hf7X2XTrJRatZaW0MOxdnRw8b26RbniVqWSa1WLb8txwm0dkqjKy17SrDCX08zpNpRzzbKnNWRy+Or09Ez3O1Cnh0uBnjFGXmyKkakZtGnSj8ssRpxWthadMsU6dzpJHO2sNhWXqtGxVqRsZqykpyadzb4SrGpbMuktE+NuruNbCndGXDPLJCdLlql5eYHNhFUWrpyWv8r3+5Hm57HtWjzuCrR33pS07UrnjaPRPHjy9EIoSoJLgIAbisgrYAbEbC2K2AGIwsVkF8IqDc0ya5LikuA9wXBcDYVkiz03BQy4HCx66MX+LpfE8wTPWMVDJTpw4QhCPlFIxn46cfqnhdn5nc29HCRpq9tR9lxvTUuu/6Axs7HPWpt03u6VcViDXzrmPGV7XNbz92c7e3WRebuHmiYONy8qRdJtRdAV0i9KJjlEujarGBZoGKRITsVLNr7imjWYl9ItvEaGurTuxTFdoPQxzdmJRqaC1pkX7dRsieaFnuseK4inknOH2Jyi/6W18D2Dk/U0PKuUtLJjcXH/2Kr8HNyXvO2PjzZ+qARLhuaZMS4tyXCJcDYGxWwI2JcLYrYUGAgAi8mS4qYUyoNyXBcFwGuS4tyXCrmzKeetRh9qrTj5zSPS9u17Jnn3JaGbG4ZdVTN+FOXwO8xuCqYmeWC6KfSm9IxXxfYc8/468f9ra8m63OYWk1r0Wn3qTT9UHaNGWtlfyM9GlTw9ONKkrRjftbbd22+u7MLk3/ALLMNztn5d7jlMfCd9YyXemipSg7nbpdvuFlQi98IPvgiXidJzKGy8N0blmqki1FKKskkupaGCtQi+LXcx+Nn8inNlepIz1sHPfFqXZuZrq1RxdpJp9TM3GxuZSjOYmYwzqFariLGK6RcqVSvKZV/elJ6My3JK1pbpTBWkYITJUmB0PJ2pqefcuIZdo4pdcoS/FSg/idryeq9I5X9pULY+/26FKXrKP9p2w8ebknbmLkuKS5tzPcFxbkuEFsVsjYrYEYCNgYAARgAuXDcUhUNcgpADcNxSIDouQ1JyxkWt8KdRrvcci/OemVWqUVBPcte18WcL+zKC/eK0uKpaeMr/2o6raNR3JjO2t9Mv7xceFY10WZYyOmkbFTDmKUZMzJk0M+clzE2C40HcTFiKUZq04qS9V3PgZUCQ0bcztDAypXlG86fH7UO9cV2o1Fep2nZydpXRqNvbIoqlUrRThON30XaL71+hxz4/uO/HyfVchh6jjXUfqyUrdjutDfQOet9JSfG7/Kzf0jhi707ZinMaoyvNi1Y2+wqnTRp/2nx/5NCX2sOl5Tl/2L+xX9Iil+07+Jhf8A5VPzRO3H48/NO3GXJcUJ0cDXJcUgBuBsjAwIKFgADZCMAH//2Q=="
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">18 Jun 2022</td>
          <td className="widgetLgAmount">$ 192.00</td>
          <td className="widgetLgStatus">
              <Button type="Approved" />
          </td>
        </tr>

        <tr className="widgetLgTr">
          <td className="WidgetLgUser">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTihPY9wwhyWQ5EQOdgg4eHsteGKZ6-D75YZw&usqp=CAU"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">23 Jun 2022</td>
          <td className="widgetLgAmount">$ 152.00</td>
          <td className="widgetLgStatus">
              <Button type="Pending" />
          </td>
        </tr>

        <tr className="widgetLgTr">
          <td className="WidgetLgUser">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzVX1EfhM9BUpo6MD4WuN02hJlxbsXdTnMWQ&usqp=CAU"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">21 Jun 2022</td>
          <td className="widgetLgAmount">$ 90.00</td>
          <td className="widgetLgStatus">
              <Button type="Declined" />
          </td>
        </tr>
        
      </table>
    </div>
  );
}
