package data;

/**
 * Created with IntelliJ IDEA.
 * User: figo
 * Date: 16-4-11
 * Time: 下午5:36
 * To change this template use File | Settings | File Templates.
 */
public class Employee {
    private Long id;
    private String img;
    private String name;
    private String desc;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDesc() {
        return desc;
    }

    public void setDesc(String desc) {
        this.desc = desc;
    }
}
